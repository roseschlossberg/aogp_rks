
uniform sampler2DRect tex0;

varying float  TexCoordx;
varying float  TexCoordy;

void main()
{
    

    vec3  AvgColor;
    float Frequency = 1000.0 ;
   
    vec2 TexCoord;
    
    float ycalibrator =100000.0;
    float xcalibrator = 150000.0;
    vec4 color;
    vec2 textureCoord = gl_TexCoord[0].xy;
    vec4 srcPixel= texture2DRect( tex0, textureCoord);
    TexCoord = vec2 ( TexCoordx/xcalibrator, TexCoordy/ycalibrator);
    

    
    // Determine the position in the checkerboard pattern
    vec2 checkPos = fract(TexCoord * Frequency);
    
    
    

     
    
    
    if ((checkPos.y>  0.5)&&(checkPos.x > 0.5)) { 
        color = vec4 (0.0, srcPixel.b,srcPixel.g, 0.5);
    }
    else if ((checkPos.y > 0.5) && (checkPos.x < 0.5)){ 
        color = vec4 ( srcPixel.b, 2.0*(srcPixel.r), 0.0, 1.0);
    }
    
    
    else if ((checkPos.y < 0.5) && (checkPos.x < 0.5)) { color = vec4 (srcPixel.g,0 , 0, 0.5); }
    else if ((checkPos.y< 0.5)&& (checkPos.x > 0.5)){ color = vec4 (srcPixel.g, srcPixel.g, srcPixel.g, 0.5);
    }
    
``gl_FragColor = vec4(color);
}
