import  React from 'react'
import { response } from 'spdy';
import UserService from '../services/UserService';

class UserComponent extends React.Component {
    constructor(props){
        super.UNSAFE_componentWillMount(props)
        this.state = {
            users:[]
        }
    }

    componentDidMount(){
        UserService.getUsers().then((response) => {
            this.setState({users: response.data})

        });

    }

    render(){
        return(
            <div>
                <h1 className = "text-center"> Users List</h1>
                <table className= "table table-striped">
                    <thead>
                        <tr>
                            <td>Id </td>
                            <td>First Name </td>
                            <td>Last Name </td>
                            <td>Rating </td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map(
                                user => 
                                <tr key = {user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.customerRating}</td>
                                </tr>

                                
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }


}

export default new UserComponent()