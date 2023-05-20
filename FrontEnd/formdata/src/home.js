import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { addmedicine } from '../../actions/medicineActions';


function Home() {
    const dispatch = useDispatch();
    const [Password, setPassword] = useState("");
    const [Result, setResult] = useState(0);
   

    const addValue = async () => {
        debugger;
       try {
            let res = await dispatch(addmedicine(medicine))
            debugger;
            if (res.status === 200) {
                debugger;
                showToastMessage(res.data.message);
                navigate("/adminMedicineList")
            }
            else {
                //alert(res.response.data.message);
                showInfoToastMessage(res.response.data.message);
            }
        }
        catch (err) {
            //alert(err.data.message);
            showInfoToastMessage(err.response.data);
        }
    }
    return (
        <div>
            <Card className="text-center col-md-6 shadow mx-auto">
                <Card.Title className="display-5 text-black"> Add Medicine</Card.Title>
                <Card.Body>
                    <Form>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
                            <Form.Label column sm="5">
                            Password 
                            </Form.Label>
                            <Col sm="7">
                                <Form.Control type="text" placeholder="Password" name="Password" value={Password} onChange={(e) => {setPassword(e.target.value)}} />
                            </Col>
                        </Form.Group>
                     
                        <Button as="input" variant="dark" type="button" onClick={addValue} value="Submit" />
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Home;