
uniform sampler2D tex0;

varying float  TexCoordx;
varying float  TexCoordy;

void main()
{
    
    vec3  Color1 = vec3(1, 1,1);
    vec3  Color2 = vec3(0,0,0);
    vec3  AvgColor;
    float Frequency = 1000.0 ;
    float fuzzMax = 0.0;
    vec2 TexCoord;
    
    float ycalibrator =0001.01;
    float xcalibrator = 0001.01;
    vec4 color;
    vec2 textureCoord = gl_TexCoord[0].xy;
    vec4 srcPixel= texture2D( tex0, textureCoord);
    TexCoord = vec2 ( TexCoordx*xcalibrator, TexCoordy*ycalibrator);
    
    // Determine the width of the projection of one pixel into s-t space
    vec2 fw = fwidth(TexCoord);
    
    // Determine the amount of fuzziness
    vec2 fuzz = fw * Frequency * 0.0;
    
    //    float fuzzMax = max(fuzz.s, fuzz.t);
    
    // Determine the position in the checkerboard pattern
    vec2 checkPos = fract(TexCoord * Frequency);
    
    
    /*
     if (fuzzMax < 0.5)
     {
     
     // If the filter width is small enough, compute the pattern color
     vec2 p = smoothstep(vec2(0.5), fuzz + vec2(0.5), checkPos) +
     (1.0 - smoothstep(vec2(0.0), fuzz, checkPos));
     
     color = mix(Color1, Color2, p.x * p.y + (1.0 - p.x) * (1.0 - p.y));
     
     // Fade in the average color when we get close to the limit
     color = mix(color, AvgColor, smoothstep(0.125, 0.5, fuzzMax));
     }
     else
     {
     // Otherwise, use only the average color
     color = AvgColor;
     }
     */ 
    
    
    if ((checkPos.x > 0.5) && (checkPos.y < 0.5)) { 
        color = vec4 (srcPixel.r, srcPixel.g,srcPixel.b, 0.5);
    }
    //else { color = vec4(1, srcPixel.g, srcPixel.b, 0.5); }
    
    else if (checkPos.y > 0.5) { color = vec4 (srcPixel.g,0 , 0, 0.5); }
    //else { color = vec4(1, 1.0, 1.0, 1.0); }
    
    
    
    gl_FragColor = vec4(srcPixel);
}
