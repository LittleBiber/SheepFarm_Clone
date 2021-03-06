import * as PIXI from "pixi.js";

export function makeShader() {
  // Build geometry.
  const geometry = new PIXI.Geometry()
    .addAttribute(
      "aVertexPosition", // the attribute name
      [
        0,
        0, // x, y
        100,
        0, // x, y
        100,
        100,
        0,
        100,
      ], // x, y
      2
    ) // the size of the attribute
    .addAttribute(
      "aUvs", // the attribute name
      [
        0,
        0, // u, v
        1,
        0, // u, v
        1,
        1,
        0,
        1,
      ], // u, v
      2
    ) // the size of the attribute
    .addIndex([0, 1, 2, 0, 2, 3]);

  const vertexSrc = `

        precision mediump float;

        attribute vec2 aVertexPosition;
        attribute vec2 aUvs;

        uniform mat3 translationMatrix;
        uniform mat3 projectionMatrix;

        varying vec2 vUvs;

        void main() {

            vUvs = aUvs;
            gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

        }`;

  const fragmentWaveSrc = `
    precision mediump float;
    varying vec2 vUvs;
    uniform float iTime;

    const float cloudscale = 3.1;
    const float speed = 0.03;
    const float clouddark = 0.5;
    const float cloudlight = 0.3;
    const float cloudcover = 0.2;
    const float cloudalpha = 8.0;
    const float skytint = 0.5;


    const mat2 m = mat2( 1.6,  1.2, -1.2,  1.6 );

    vec2 hash( vec2 p ) {
        p = vec2(dot(p,vec2(127.1,311.7)), dot(p,vec2(269.5,183.3)));
        return -1.0 + 2.0*fract(sin(p)*43758.5453123);
    }

    float noise( in vec2 p ) {
        const float K1 = 0.366025404; // (sqrt(3)-1)/2;
        const float K2 = 0.211324865; // (3-sqrt(3))/6;
        vec2 i = floor(p + (p.x+p.y)*K1);	
        vec2 a = p - i + (i.x+i.y)*K2;
        vec2 o = (a.x>a.y) ? vec2(1.0,0.0) : vec2(0.0,1.0); //vec2 of = 0.5 + 0.5*vec2(sign(a.x-a.y), sign(a.y-a.x));
        vec2 b = a - o + K2;
        vec2 c = a - 1.0 + 2.0*K2;
        vec3 h = max(0.5-vec3(dot(a,a), dot(b,b), dot(c,c) ), 0.0 );
        vec3 n = h*h*h*h*vec3( dot(a,hash(i+0.0)), dot(b,hash(i+o)), dot(c,hash(i+1.0)));
        return dot(n, vec3(70.0));	
    }

    float fbm(vec2 n) {
        float total = 0.0, amplitude = 0.1;
        for (int i = 0; i < 7; i++) {
            total += noise(n) * amplitude;
            n = m * n;
            amplitude *= 0.4;
        }
        return total;
    }


    void main()
    {
        vec2 iResolution = vec2(100.0, 100.0);
        vec2 fragCoord = vUvs.xy * iResolution.xy;
        vec2 p = fragCoord.xy / iResolution.xy;
        vec2 uv = p*vec2(iResolution.x/iResolution.y,1.0);    
        float time = iTime * speed;
        float q = fbm(uv * cloudscale * 0.5);
        
        //ridged noise shape
        float r = 0.0;
        uv *= cloudscale;
        uv -= q - time;
        float weight = 0.8;
        for (int i=0; i<3; i++){
            r += abs(weight*noise( uv ));
            uv = m*uv + time;
            weight *= 0.7;
        }
        
        //noise shape
        float f = 0.0;
        uv = p*vec2(iResolution.x/iResolution.y,1.0);
        uv *= cloudscale;
        uv -= q - time;
        weight = 0.7;
        for (int i=0; i<2; i++){
            f += weight*noise( uv );
            uv = m*uv + time;
            weight *= 0.6;
        }
        
        f *= r + f;
        
        //noise colour
        float c = 0.0;
        time = iTime * speed * 3.0;
        uv = p*vec2(iResolution.x/iResolution.y,1.0);
        uv *= cloudscale*2.0;
        uv -= q - time;
        weight = 0.8;
        for (int i=0; i<2; i++){
            c += weight*noise( uv );
            uv = m*uv + time;
            weight *= 0.9;
        }
        
        //noise ridge colour
        float c1 = 0.0;
        time = iTime * speed * 7.0;
        uv = p*vec2(iResolution.x/iResolution.y,1.0);
        uv *= cloudscale*5.0;
        uv -= q - time;
        weight = 0.3;
        for (int i=0; i<2; i++){
            c1 += abs(weight*noise( uv ));
            uv = m*uv + time;
            weight *= 0.9;
        }
        
        c += c1;
        
        vec3 cloudcolour = vec3(1.0, 0.99, 0.95) * clamp((clouddark + cloudlight*c), 0.0, 1.0);
        vec3 ccc = vec3( cloudcolour.xyz * cloudcolour.xyz * cloudcolour.xyz * cloudcolour.xyz );
        gl_FragColor = vec4( ccc.xyz , ccc.x);
    }`;

  const uniforms = {
    iTime: 0.5,
  };

  const shader = PIXI.Shader.from(vertexSrc, fragmentWaveSrc, uniforms);
  const quad = new PIXI.Mesh(geometry, shader);
  const renderTexture = PIXI.RenderTexture.create(100, 100);
  const sprite = PIXI.Sprite.from(renderTexture);
  const container = new PIXI.Container();

  container.renderTexture = renderTexture;
  container.originalWidth = 100;
  container.originalHeight = 100;
  container.quad = quad;
  container.addChild(sprite);

  container.updateTexture = function (app, elapsed) {
    this.quad.shader.uniforms.iTime = elapsed * 0.005;
    app.renderer.render(this.quad, this.renderTexture);
  };
  quad.state.blendMode = PIXI.BLEND_MODES.NORMAL;
  return container;
}
