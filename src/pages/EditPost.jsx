import PageHeader from "../components/PageHeader/index.js";
import {Alert, Button, Form, Spinner} from "react-bootstrap";
import {useState, useEffect} from "react";
import {updatePost} from "../utils/api.js";
import {useNavigate, useParams} from "react-router-dom";
import routerPaths from "../router/routerPaths.js";

const initialFormState = {
    title: '',
    body: ''
}

const EditPost = () => {
    const navigate = useNavigate();
    const [formState, setFormState] = useState({...initialFormState})
    const [isRequestSuccess, setIsRequestSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const {id} = useParams();
    const [prefillLoading, setPrefillLoading] = useState(true);
    const [errors, setErrors] = useState(null);

    useEffect(() => {
        let cancelled = false;
        setPrefillLoading(true);
        setErrors(null);
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(r => r.ok ? r.json() : Promise.reject(new Error('Failed to fetch post')))
            .then(data => {
                if (cancelled) return;
                setFormState({
                    title: data?.title ?? "",
                    body: data?.body ?? "",
                });
                setPrefillLoading(false);
            })
            .catch(error => {
                if (cancelled) return;
                setErrors(error.message);
                setPrefillLoading(false);
            });
        return () => {cancelled = true;  };
    }, [id]);


    const handleChange = ({target}) => {
        const localState = {...formState}
        localState[target.name] = target.value
        setFormState(localState)
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        if(loading || prefillLoading) return;
        console.log("SUBMIT PUT", { id, formState });
        setLoading(true)
        try {
            const res = await updatePost(id, formState);
            if (!res.ok) throw new Error("Failed to update post");
            const data = await res.json();
            console.log("PUT RESULT:", data);

            setIsRequestSuccess(true)
            setTimeout(() => {
                navigate(routerPaths.posts, {
                    state: {
                        updated: {
                            id: Number(id),
                            title: formState.title,
                            body: formState.body,
                            userId: 1,
                        },
                    },
                });
            }, 2000);
        } catch (error) {
            console.log(error)
            setIsRequestSuccess(false)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div>
            <PageHeader title="Edit Post" />
            {errors && <Alert variant={'danger'} className="text-center">{errors}</Alert>}
            {prefillLoading && (
                <div className="d-flex justify-content-center my-3">
                    <Spinner animation="border"/>
                </div>
            )}
            {isRequestSuccess && (
                <Alert variant="success" className="text-center">
                    Data saved!
                </Alert>
            )}
            {!prefillLoading && (
                <Form className='col-md-6 offset-md-3' onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                        disabled = {loading || prefillLoading}
                        type='text'
                        placeholder="Enter title"
                        name = 'title'
                        value = {formState.title}
                        onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicBody">
                        <Form.Label>Body</Form.Label>
                        <Form.Control
                        disabled = {loading || prefillLoading}
                        as="textarea"
                        placeholder = "Body"
                        rows = {3}
                        name = 'body'
                        value = {formState.body}
                        onChange={handleChange}
                        />
                    </Form.Group>
                    <Button
                        variant={loading ? "secondary" : "primary"}
                        type="submit"
                        className= "d-flex align-items-center gap-2"
                        disabled={loading || prefillLoading}
                    >
                        <span>Save changes</span>
                        {loading && (
                            <Spinner animation="border" role="status" size="sm">
                            <span className="visually-hidden">Saving post...</span>
                                </Spinner>
                        )}
                    </Button>
                    </Form>
            )}
        </div>

    );
};

export default EditPost;
