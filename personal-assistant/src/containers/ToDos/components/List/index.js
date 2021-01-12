import React from 'react'
import cancelSrc from './cancel.png'
import { GTable, EdImgButton } from './styles'

export default ({ list, setList, search }) => (list.length ? (
  <GTable>
    <tbody>
      <tr key="0">
        <td><b>Item</b></td>
      </tr>
      {list.map((item, i) => ((search && item.search(search) === -1) ? false : (
        <tr key={item}>
          <td>{item}</td>
          <td>
            <EdImgButton
              type="button"
              onClick={() => { setList({ mode: 'delete', item: i }) }}
            >
              <img alt="Cancel" src={cancelSrc} />
            </EdImgButton>
          </td>
        </tr>
      )))}
    </tbody>
  </GTable>
) : <div>Nothing to do.</div>)
