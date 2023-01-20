import React from 'react';

type PropsType={
    setNewTitle:(newTitle:string)=>void
    newTitle:string
}

export const SuperInput = (props:PropsType) => {
    return (
        <div>
            <input value={[props.newTitle]} onChange={(e)=>props.setNewTitle(e.currentTarget.value)}/>
        </div>
    );
};

