import styles from './styles.module.css'
import styled from 'styled-components'
import { myDefaultCSs } from '../globalCss'

export const Title = (props) => 
  <h1 className={styles.default_bg}>{props.children}</h1>
  
export const StyledTitle = styled.h1`
  background-color: ${(props) => 
      props.primary ? 'cornflowerblue' : 'blanchedalmond'};
  padding: ${props => props.padding || '0px'}
`

export const StyledObjTitle = styled.div({
  ...myDefaultCSs,
  margin: '10px'
})