import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export const App = () => {
    
    return (
        <section className='App'>
            <TwitterFollowCard userName={'Gorillaz'} name={'Gorillaz'} />
            <TwitterFollowCard userName={'Gorillaz'} name={'Gorillaz'} />
        </section>
    )
}