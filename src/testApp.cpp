#include "testApp.h"

//--------------------------------------------------------------
void testApp::setup(){
    	ofSetLogLevel(OF_LOG_VERBOSE);

    
    myMovie.loadMovie("vomit.mp4");
    myMovie.play();
    shader.load("shaders/checkerboard.vs", "shaders/checkerboard.frag");
    myImage.loadImage("pancake.jpg");
    
    fbo.allocate(400, 300);
    
 
}

//--------------------------------------------------------------
void testApp::update(){

    myMovie.update();
    
}

//--------------------------------------------------------------
void testApp::draw(){

fbo.begin();
    ofClear(0, 0, 0,255);
    fbo.draw(0,0, 600, 600);

    
    
    //myImage.draw(0,0,600, 400);
    shader.begin();
    
    
    shader.setUniformTexture("tex0", myMovie.getTextureReference(), 1);
   // shader.setUniformTexture("tex0", myImage, 1);
    //myMovie.draw(0,0, 600, 400);
    //ofBox(100,100, 100, 50);
    shader.end();
    fbo.end();
}

//--------------------------------------------------------------
void testApp::keyPressed(int key){

}

//--------------------------------------------------------------
void testApp::keyReleased(int key){

}

//--------------------------------------------------------------
void testApp::mouseMoved(int x, int y ){

}

//--------------------------------------------------------------
void testApp::mouseDragged(int x, int y, int button){

}

//--------------------------------------------------------------
void testApp::mousePressed(int x, int y, int button){

}

//--------------------------------------------------------------
void testApp::mouseReleased(int x, int y, int button){

}

//--------------------------------------------------------------
void testApp::windowResized(int w, int h){

}

//--------------------------------------------------------------
void testApp::gotMessage(ofMessage msg){

}

//--------------------------------------------------------------
void testApp::dragEvent(ofDragInfo dragInfo){ 

}