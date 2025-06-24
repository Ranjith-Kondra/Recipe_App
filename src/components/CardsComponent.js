import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setData } from '../reducers/cardReducer'
import { Table } from 'reactstrap'
import axios from 'axios'
import AddDataButton from './AddDataButton'
import { setdata } from '../actions'
import LoginValidation from './LoginValidation'
import AddUpdateButton from './AddUpdateButton'



function CardsComponent() {

    const [modal, setModal] = useState(false);


    const [formdata, setFormdata] = useState({
        id : null,
        username : '',
        mailid : '',
        password : '',
        address : ''
    })

    const handleInput = (e) => {
        const { name, value } = e.target

        setFormdata({
            ...formdata,
            [name]: value
        })

        console.log(formdata)

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit is clicked")
    }

    const toggle = () => setModal(!modal);


    // let data = useSelector((state) => state.cardsReducer.data);
    let [data, setData] = useState([]);

    console.log(data)
    let dispatch = useDispatch();


    let fetch = async () => {
        try {
            let response = await axios.get('http://localhost:4000/fetch');
            console.log(response.data)
            // dispatch(setData(response.data))
            setData(response.data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetch()

    }, [])



    const handleDelete = async(id) => {
        try {
          let response = await axios.delete(`http://localhost:4000/delete/${id}`);
          console.log('user record is deleted');
          fetch()
        } catch (error) {
          console.log(error)
        }
      }




    return (
        <div>
            <Table class="table table-striped  table-bordered border-dark table-responsive">
                <thead>
                    <tr>
                        <th>
                            id
                        </th>
                        <th>
                            user Name
                        </th>
                        <th>
                            mailid
                        </th>
                        <th>
                            password
                        </th>
                        <th>
                            address
                        </th>
                        <th>
                            user record delete
                        </th>
                        <th>
                            user record update
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr>
                            <th scope="row">
                                {item.id}
                            </th>
                            <td>
                                {item.username}
                            </td>
                            <td>
                                {item.mailid}
                            </td>
                            <td>
                                {item.password}
                            </td>
                            <td>
                                {item.address}
                            </td>

                            <td>
                            <button className="btn btn-danger" onClick={()=>{handleDelete(item.id)}}>Delete</button>
                            </td>

                            <td>
                                <AddUpdateButton data={item } fetch={fetch}/>
                            </td>

                        </tr>
                    ))}
                </tbody>

            </Table>

            <AddDataButton fetch={fetch}/>
            <br/><br/>
            <LoginValidation />

        </div>
    )
}


export default CardsComponent