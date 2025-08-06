import { describe, it, expect, beforeEach, vi } from 'vitest'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { Router } from './components/Router.jsx'
import { Route } from './components/Route.jsx'
import { Link } from './components/Link.jsx'
import { getCurrentPath } from "./utils/utils.js"

vi.mock('./utils/utils.js', () => ({
    getCurrentPath: vi.fn()
}))

describe('Router', () => {
    beforeEach(() => {
        cleanup()
        vi.clearAllMocks()
    })
    
    it('should render without problems', () => {
        render(<Router routes={[]} />)
        expect(true).toBeTruthy()
    })

    it('should render 404 if no routes match', () => {
        render(<Router routes={[]} defaultComponent={() => <h1>404</h1>} />)
        expect(screen.getByText('404')).toBeTruthy()
    })

    it('should render the component of the first route that matches', () => {
        getCurrentPath.mockReturnValue('/About')
    
        const routes = [
        {
            path: '/',
            Component: () => <h1>Home</h1>
        },
        {
            path: '/about',
            Component: () => <h1>About</h1>
        }
        ]

        render(<Router routes={routes} />)
        expect(screen.getByText('About')).toBeTruthy()
  })

  it('Should navigate using links', async () => {
    getCurrentPath.mockReturnValueOnce('/')
    getCurrentPath.mockReturnValueOnce('/About')

    render (
        <Router>
            <Route path='/' Component={() => {
                return (
                    <>
                        <h1>Home</h1>
                        <Link to='/About'>About</Link>
                    </>)
            }} />
            <Route path='/About' Component={() => <h1>About</h1>} />
        </Router>
    )

    const anchor = screen.getByText('About')

    fireEvent.click(anchor)

    const aboutTitle = await screen.findByText('About')

    // Check that the new route is rendered
    expect(aboutTitle).toBeTruthy()
  })

})
