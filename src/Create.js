import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Create = () => {
    const[quotes, setQuotes] = useState('');
    const[bio, setBio] = useState('');
    const[author, setAuthor] = useState('Oscar Wilde');
    const[isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { quotes, bio, author};

        setIsPending(true);

        fetch('http://192.168.12.208:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new quotes added!');
            setIsPending(false);
            navigate('/');
        })
    }

    return (
        <div className="create">
            <h2>Add a New Quotes</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-label">Quotes</label>
                    <input type="text" className="form-control" required value={quotes} onChange={(e) => setQuotes(e.target.value)} />
                    <label className="form-label">Author Biography</label>
                    <textarea className="form-control" rows="13" required value={bio} onChange={(e) => setBio(e.target.value)}></textarea>
                    <label className="form-label">Author</label>
                    <select className="form-control" value={author} onChange={(e) => setAuthor(e.target.value)}>
                        <option value="Oscar Wilde">Oscar Wilde</option>
                        <option value="Mae West">Mae West</option>
                        <option value="Albert Einstein">Albert Einstein</option>
                    </select>
                    { !isPending && <button className="btn btn-primary submit">Submit</button> }
                    { isPending && <button disabled className="btn btn-primary submit">Adding...</button> }
                </div>
            </form>
        </div>
    );
};

export default Create;
