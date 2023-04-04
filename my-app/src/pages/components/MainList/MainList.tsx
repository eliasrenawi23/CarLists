import React, { useState } from 'react'
import './MainList.scss';
export interface ListItem {
  id: number;
  text: string;
  isExpanded: boolean;

}

interface ListProps {
  items: ListItem[];
}

const MainList: React.FC<ListProps> = ({ items }) => {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleExpanded = (itemId: ListItem) => {
    if (expandedItems.includes(itemId.id)) {
      setExpandedItems(expandedItems.filter(id => id !== itemId.id));
    } else {
      setExpandedItems([...expandedItems, itemId.id]);
    }
    itemId.isExpanded=!itemId.isExpanded;

  };

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Model</th>
          <th>Engine</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <React.Fragment key={item.id} >
            <tr className="list" onClick={() => toggleExpanded(item)}>
              <td>{item.text}</td>
              <td>{item.id}</td>
              <td>{item.isExpanded.toString()}</td>
            </tr>
            {expandedItems.includes(item.id) && (
              <tr className="list-item-details">
                <td colSpan={3}>
                  <p>Additional details go here.</p>
                </td>
              </tr>
            )}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
}

export default MainList;