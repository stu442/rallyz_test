import { useNavigate } from "react-router-dom";
import { Button, Wrapper } from "./style"

function DetailHeader() {
    const navigate = useNavigate();

    return (
        <Wrapper>
            <Button onClick={() => navigate(-1)} type="button">&lt; 목록으로 돌아가기</Button>
        </Wrapper>
    )
}

export default DetailHeader