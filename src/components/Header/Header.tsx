import { useSetRecoilState } from "recoil";
import { Button, Form, Input } from "./style";
import { searchState } from "../../atoms/searchState";
import { useState } from "react";

export default function Header() {
    const setSearchData = useSetRecoilState(searchState);
    const [inputValue, setInputValue] = useState<string>('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSearchData(inputValue);
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Input value={inputValue} onChange={handleInputChange} type="text"></Input>
            <Button type="submit">검색</Button>
        </Form>
    )
}