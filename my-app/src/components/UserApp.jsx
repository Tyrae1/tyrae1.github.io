import React from "react";
import UserForm from "./UserForm.jsx";
import UserList from "./UserList.jsx";
import {Container, Row, Col} from "react-bootstrap";

const STORAGE_KEY_USERS = 'users';

export default class UserApp extends React.Component{
    constructor(props) {
        super(props);
        let saved = [];
        try { saved = JSON.parse(localStorage.getItem(STORAGE_KEY_USERS)) || []; }
        catch { saved = []; }
        this.state = {
            users: saved,
            draftFirstName: '',
            draftLastName: '',
            draftAge: '',
            photoFile: null,
            photoPreview: null,
            photoError: null,
        };
    }
    addUser = ({firstName, lastName, age, photoURL}) => {
        const newUser = {
            id: Date.now().toString(),
            firstName: firstName.trim(),
            lastName: lastName.trim(),
            age: Number(age),
            photoURL,
            createdAt: new Date().toISOString(),
        };
        this.setState(
            prev => ({users: [newUser, ...prev.users]}),
        );
    };
    deleteUser = (id) => {
        this.setState(
            prev => ({users: prev.users.filter(u => u.id !== id)}));
    };
    componentDidUpdate(prevProps, prevState){
        if (prevState.users !== this.state.users) {
            localStorage.setItem(STORAGE_KEY_USERS, JSON.stringify(this.state.users));
        }
    }
    clearAll = () => this.setState({users: []})

    handlePhotoChange = (e) => {
        const file=e.target.files && e.target.files[0];
        this.setState({photoError: null});
        if (!file) {
            if (this.state.photoPreview) {
                URL.revokeObjectURL(this.state.photoPreview);
            }
            this.setState({photoFile: null, photoPreview: null});
            return;
        }

        if (!file.type.startsWith("image/")) {
            this.setState({photoFile: null, photoPreview: null, photoError: "Choose another image!"});
            return;
        }

        if (this.state.photoPreview) {
            URL.revokeObjectURL(this.state.photoPreview);
        }

        const preview = URL.createObjectURL(file);
        this.setState({photoFile: file, photoPreview: preview});
    };

    handleSubmit = (e)=> {
        e.preventDefault();
        const {draftFirstName, draftLastName, draftAge, photoFile, photoPreview} = this.state;
        const ageNum = Number(draftAge);
        const isValid = 
            draftFirstName.trim() &&
            draftLastName.trim() &&
            draftAge !== "" &&
            Number.isInteger(ageNum) &&
            ageNum>=0 &&
            photoFile;

            if (!isValid) return;

            this.addUser({
                firstName: draftFirstName,
                lastName: draftLastName,
                age: ageNum,
                photoURL: photoPreview,
            });
            
            this.setState (
                {
                draftFirstName: "",
                draftLastName: "",
                draftAge: "",
                photoFile: null,
                photoPreview: null,
                photoError: null, 
                },
                ()=>{

                }
            );
    };

    render(){
        const {users} = this.state;

        return (
            <Container className="py-4">
                <Row>
                    <Col md={4}>
                    <UserForm
                    firstName={this.state.draftFirstName}
                    lastName={this.state.draftLastName}
                    age={this.state.draftAge}
                    previewUrl={this.state.photoPreview}
                    photoError={this.state.photoError}
                    isValid={
                        this.state.draftFirstName.trim() &&
                        this.state.draftLastName.trim() &&
                        this.state.draftAge !== "" &&
                        Number.isInteger(Number(this.state.draftAge)) &&
                        Number(this.state.draftAge) >=0 &&
                        Boolean(this.state.photoFile)
                    }
                    onFirstNameChange={(e) => this.setState({draftFirstName: e.target.value})}
                    onLastNameChange={(e) => this.setState({draftLastName: e.target.value})}
                    onAgeChange={(e)=> this.setState({draftAge: e.target.value})}
                    onPhotoChange={this.handlePhotoChange}
                    onSubmit={this.handleSubmit}
                    />
                    </Col>
                    <Col md={8}>
                    <h1 className="h3 mb-3">Users</h1>
                    <div className="mb-3 d-flex gap-2">
                    
                    <button className="btn btn-outline-danger ms-auto" onClick={this.clearAll}>Clear all</button>
                </div>      
                <UserList
                    users={this.state.users}
                    onDelete={this.deleteUser}
                />
                    </Col>
                </Row>
            </Container>
                
                
                

        );
    }
}
