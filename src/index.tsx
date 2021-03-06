import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'antd'

import styles from './index.scss'
import ViewTest from '@views/ViewTest'
import ShareTest from '@shared/SharedTest'

import App from '@views/App/index'
import Provider from './store/index'

const render = () => {
  ReactDOM.render(
    <div className={styles.test}>
      <Provider>
        <App />
      </Provider>
      {/* <ViewTest />
      <ShareTest />
      <Button type="primary">按钮</Button> */}
    </div>,
    document.querySelector('#app')
  )
}

render()