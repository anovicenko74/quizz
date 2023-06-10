import styled from '@emotion/styled'

export const Header = styled.div({
    height: '64px',
    transition: 'background .3s ease,box-shadow .3s ease',
    boxShadow: 'inset 0 -1px 0 0 var(--accents-2)',
    transform: 'translateZ(0)',
    backdropFilter: 'saturate(180%) blur(5px)',
    background: 'rgba(0,0,0,.8)',
    display: 'flex',
    justifyContent: 'right',
    alignItems: 'center',
    padding: '0 5px 0 0',
    fontSize: '2rem',
    color: '#8C4D5E',
})
