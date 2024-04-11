import { Button, Form, Input } from "./style";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const [inputValue, setInputValue] = useState<string>('');
    const navigate = useNavigate();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        navigate(`/search/${inputValue}`);
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Input value={inputValue} onChange={handleInputChange} type="text"></Input>
            <Button type="submit">검색</Button>
        </Form>
    )
}