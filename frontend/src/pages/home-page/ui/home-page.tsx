import { Button } from "antd"
import { useNavigate } from "react-router-dom"

export function Homepage() {
    const navigate = useNavigate()

    return (
        <section>
            <h1>Welcome to repo viewer!</h1>
            <h3>App that handles repositories</h3>
            <Button
                size='large'
                type='primary'
                onClick={() => {
                    navigate("/repositories")
                }}
            >
                Jump to the list
            </Button>
        </section>
    )
}
