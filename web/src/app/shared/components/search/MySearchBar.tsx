import React from 'react'
import { Input } from 'semantic-ui-react';

export default function MySearchBar() {
    return (
        <div className="mySearchBar">
            <Input icon='search' placeholder='Buscar...' />
        </div>
    )
}
