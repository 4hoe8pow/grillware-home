import { $, component$, useStore } from '@builder.io/qwik'
import { Link } from '@builder.io/qwik-city'
import { css } from '~/styled-system/css'
import { wrap } from '~/styled-system/patterns/wrap'
import { center } from '~/styled-system/patterns'

const headerStyles = center({
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    color: '#eee',
    padding: '1rem',
})

const menuButtonStyles = css({
    display: 'block',
    fontSize: '1.5rem',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    md: {
        display: 'none',
    },
})

const navLinksStyles = wrap({
    gap: 5,
    display: 'none',
    flexDirection: 'column',
    position: 'absolute',
    top: '4rem',
    right: '1rem',
    border: '1px solid #444',
    borderRadius: '8px',
    padding: '1rem',
    '&.open': {
        display: 'flex',
    },
    md: {
        display: 'flex',
        flexDirection: 'row',
        position: 'static',
        backgroundColor: 'transparent',
        border: 'none',
        padding: '0',
    },
})

export const Header = component$(() => {
    const state = useStore({ isOpen: false })

    const toggleMenu = $(() => {
        state.isOpen = !state.isOpen
    })

    return (
        <header class={headerStyles}>
            <h2>Grillware</h2>
            <button class={menuButtonStyles} onClick$={toggleMenu}>
                ☰
            </button>
            <nav class={`${navLinksStyles} ${state.isOpen ? 'open' : ''}`}>
                <Link href="/">Home</Link>
                <Link href="/topics">Topics</Link>
            </nav>
        </header>
    )
})
