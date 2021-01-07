import React from 'react'
import $ from 'jquery'
import DeleteButton from './delbutton'

const list = ({ listItems }) => (
  <table>
      <tr>
          <td><b>Item</b></td>
      </tr>
    {$.each(listItems, (i, item) => (<tr><td>{item}</td><td><DeleteButton click={() => {$(this).parents('tr').remove()}} /></td></tr>))}
  </table>
)

export default list
