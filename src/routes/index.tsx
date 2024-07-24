import { DocumentHead } from '@builder.io/qwik-city'
import { component$ } from '@builder.io/qwik'

export default component$(() => {
    return (
        <>
            <h1>Hi 👋</h1>
            <div>
                Can't wait to see what you build with qwik!
                <br />
                Happy coding.
            </div>
            <div class="window-body">
                <p>Hello, world!</p>

                <menu role="tablist">
                    <li role="tab" aria-selected="true">
                        <a href="#tabs">Desktop</a>
                    </li>
                    <li role="tab">
                        <a href="#tabs">My computer</a>
                    </li>
                    <li role="tab">
                        <a href="#tabs">Control panel</a>
                    </li>
                    <li role="tab">
                        <a href="#tabs">Devices manager</a>
                    </li>
                    <li role="tab">
                        <a href="#tabs">Hardware profiles</a>
                    </li>
                    <li role="tab">
                        <a href="#tabs">Performance</a>
                    </li>
                </menu>
                <div class="window" role="tabpanel">
                    <div class="window-body">
                        <p>the tab content</p>
                    </div>
                </div>
            </div>
        </>
    )
})

export const head: DocumentHead = {
    title: 'Welcome to Qwik',
    meta: [
        {
            name: 'description',
            content: 'Qwik site description',
        },
    ],
}
