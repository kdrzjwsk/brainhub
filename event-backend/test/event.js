let server = require("../server");
let chai = require("chai");
let chaiHttp = require("chai-http");

chai.should();
chai.use(chaiHttp);

describe("Event API", () => {
    describe("Test POST event", () => {
        it("posts a new event", (done) => {
            let event = {
                firstName: "Jane",
                lastName: "Doe",
                email: "jane.doe@mail.com",
                date: "2021-07-01"
            }
            chai.request(server)
                .post("/event")
                .send(event)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a("object");
                    res.body.should.have.property("success").eql(true);
                    res.body.should.have.property("data");
                    done();
                })
        }),
            it("validates request body", (done) => {
                chai.request(server)
                    .post("/event")
                    .send({})
                    .end((err, res) => {
                        res.should.have.status(400);
                        res.body.should.be.a("object");
                        res.body.should.have.property("success").eql(false);
                        res.body.should.have.property("error");
                        done();
                    })
            })
    })
})