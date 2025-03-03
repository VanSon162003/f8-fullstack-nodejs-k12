import Button from "../components/common/Button";

function HomePage(props) {
    return (
        <div>
            <h1>Home Page</h1>
            <p>Đây là trang chủ của {props.company}</p>

            <Button variant="primary" size="small">
                click me
            </Button>
            <Button variant="secondary" size="medium">
                click me2
            </Button>
            <Button variant="link" size="big">
                click me3
            </Button>
        </div>
    );
}

export default HomePage;
