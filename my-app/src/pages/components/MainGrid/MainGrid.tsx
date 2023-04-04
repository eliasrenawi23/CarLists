import React from 'react'
 import './MainGrid.scss';
export interface ListItem {
    id: number;
    text: string;
    isExpanded: boolean;

}

interface ListProps {
    items: ListItem[];
}
const MainGrid: React.FC<ListProps> = ({ items }) => {
    return (
        <div className="grid">
            {items.map(item => (
                <div key={item.id} className="grid-item">
                    <div className="grid-item-header">
                        <span>name is:{item.text}</span>
                        <span> id is: {item.id}</span>

                    </div>

                </div>
            ))}
        </div>)
}

export default MainGrid