#include "testApp.h"

//--------------------------------------------------------------
void testApp::setup(){
    ofSetLogLevel(OF_LOG_VERBOSE);

    myMovie.loadMovie("vomit.mp4");
    myMovie.play();
    shader.load("shaders/checkerboard.vs", "shaders/checkerboard.frag");
       
 
}

//--------------------------------------------------------------
void testApp::update(){

    myMovie.update();
    
}

//--------------------------------------------------------------
void testApp::draw(){


    ofClear(0, 0, 0,255);
    shader.begin();
    shader.setUniformTexture("tex0", myMovie.getTextureReference(), 1);
    myMovie.draw(0,0, 600, 400);
    shader.end();
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