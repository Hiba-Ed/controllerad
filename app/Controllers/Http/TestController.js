'use strict'

class TestController {
    hello(){
        return "Hello from Controller";
    }

    helloctx(ctx) {
        console.log(ctx.request); 
        console.log(ctx.response);
        return "Hello from TestController.helloctx";
    }
    
    world({request, response}){
        console.log(request); 
        console.log(response);
        return "Hello from TestController.world";
    }
}

module.exports = TestController