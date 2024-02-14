
import {Sum} from '../Sum'

test("It should return sum of two numbers ", ()=> {

    // Assertion
   const res = Sum(3,4);
   expect(res).toBe(7);

})

    // output =  
    // Expected: what the actually what function should return
    // Received: What we've got after running the test case by providing wrong value.