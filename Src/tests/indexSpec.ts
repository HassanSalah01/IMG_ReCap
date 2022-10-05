//End Point Testing......
import app from "./../index";
import supertest from "supertest";

const request = supertest(app);

describe("EndPoint test", () => {
    it("Return 200 From endPoint", async () => {
        const response = await request.get("/");
        expect(response.status).toBe(200);
    });
});

// import supertest from 'supertest';
// import app from '../index';
// const request = supertest(app);

// describe('Test endpoint responses', () => {
//     it('gets the api endpoint', async () => {
//         const response = await request.get('/');
//         expect(response.status).toBe(200);
//     }
// )})

// describe('Test endpoint responses', () => {
//     it('gets the api endpoint', async () => {
//         const response = await request.get('/');
//         expect(response.status).toBe(400);
//     }
// )})

// // import app from '../index'
// // import supertest from 'supertest'

// // const request = supertest(app);

// // describe("End Point Testing",()=>{
// //     it("Return 200 For The /",async (done)=>{
// //         const response = await request.get("/");
// //         expect(response.status).toBe(200);

// //     })
// // })
