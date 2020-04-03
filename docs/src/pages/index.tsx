import React from 'react'
import { Link } from 'gatsby'

import Skeleton from '../components/Layout/Skeleton'
import SEO from '../components/seo'
import SimpleWheelDrag from '../components/SimpleWheelDrag/SimpleWheelDrag'
import CodeArea from '../components/CodeArea/CodeArea'

// eslint-disable-next-line react-app/import/no-webpack-loader-syntax
import CodeAreaCode from '!!raw-loader!../components/CodeArea/CodeArea'
import { Richtext } from '../components/Richtext/Richtext'

const IndexPage = () => (
  <Skeleton>
    <SEO title="Home" />
    <Richtext>
      <h1>Add wheel gestures to your web app</h1>
      <p>Allow users to interact with your website like on a touch device</p>
      <h3>Demo</h3>
      <SimpleWheelDrag />
      <h3>Installation</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium adipisci, debitis enim est
        facere illo ipsa maiores mollitia neque nisi non nostrum placeat possimus recusandae, sequi soluta, sunt vero!{' '}
      </p>
      <h3>momentum detection - Compatibility</h3>
      <p>momentum detection tested with</p>
      <ul>
        <li>macOS (Magic Mouse & Magic Trackpad)</li>
        <li>Windows with Precision Touchpads (PTP)</li>
      </ul>
      <CodeArea>{CodeAreaCode}</CodeArea>
      <h3>Example</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus beatae debitis dicta dolor fuga labore
        necessitatibus, nemo nesciunt nihil odio perspiciatis, quasi qui quia repudiandae tempore unde ut vitae
        voluptatem!
      </p>

      <Link to="/gallery">Go to page 2</Link>
    </Richtext>
  </Skeleton>
)

export default IndexPage