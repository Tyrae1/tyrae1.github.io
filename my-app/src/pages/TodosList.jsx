import {Alert, Button, Spinner} from "react-bootstrap";
import PageHeader from "../components/PageHeader";
import {fetchData} from "../utils/api.js";
import {useState} from "react";
import CustomTable from "../components/CustomTable/CustomTable";
import nameNormalizer from "../utils/nameNormalizer.js";
import {useNavigate} from "react-router-dom";


const TodosList = () => {
    const navigate = useNavigate();
    const [todos, setTodos] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const loadTodos = async () => {
        setLoading(true)
        let data = null;

        try {
            data = await fetchData('/users')
        } catch (error) {
            console.log(error)
            setIsError(true)
        } finally {
            setLoading(false)
        }


        setTodos(data)
        console.log(data)
    }

    const getHeaders = (todos, excludeKeys) => {
         const headers = Object.keys(todos[0]).reduce((acc, item) => {
            if(!excludeKeys.includes(item)) {
                acc.push(nameNormalizer(item))
            }

            return acc
        }, [])

        headers.push('Controls')
        return headers;
    }

    const getContents = (todos, excludeKeys) => {
        const contents = todos.map(todo => {
            const todoData = Object.keys(todo).reduce((acc, item) => {
                if(!excludeKeys.includes(item)) {
                    acc.push(todo[item])
                }

                return acc
            }, [])

            todoData.push(<div className="d-flex gap-2">
                <Button onClick={() => navigate(`${todoData[0]}`)} variant={"primary"} size={'sm'}>Edit</Button>
                <Button variant={"danger"} size={'sm'}>Delete</Button>
            </div>  )

            return todoData
        })
        return contents;
    }

    return (
        <div>
            <PageHeader
                title={'Todos List'}
                LeftControl={() => <Button variant={'success'} onClick={loadTodos}>Upload todos</Button>}
            />

            {!todos &&
                <Alert variant={'secondary'} className="text-center">
                    Please press "Upload todos" button to upload todos from API.
                </Alert>
            }

            {loading ? <Alert variant={'warning'} className="text-center">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </Alert> : null}


            {isError ? <Alert variant={'danger'} className="text-center">Error while loading data!</Alert> : null}

            {todos ? <div className="content">
                <CustomTable
                    responsive="lg"
                    variant="secondary"
                    headers={getHeaders(todos, ['address', 'company', 'username'])}
                    content={getContents(todos, ['address', 'company', 'username'])}
                />
            </div> : null}

        </div>
    );
};

export default TodosList;
