import { component$, useStore } from '@builder.io/qwik';

export default component$(() => {
  // フォームデータの管理
  const formState = useStore({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (event: Event) => {
    event.preventDefault();
    console.log(formState);
  };

  return (
    <form onSubmit$={handleSubmit}>
      <div>
        <label for="name">Name:</label>
        <input
          id="name"
          type="text"
          value={formState.name}
          onInput$={(event) => (formState.name = (event.target as HTMLInputElement).value)}
        />
      </div>
      <div>
        <label for="email">Email:</label>
        <input
          id="email"
          type="email"
          value={formState.email}
          onInput$={(event) => (formState.email = (event.target as HTMLInputElement).value)}
        />
      </div>
      <div>
        <label for="message">Message:</label>
        <textarea
          id="message"
          value={formState.message}
          onInput$={(event) => (formState.message = (event.target as HTMLTextAreaElement).value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
});
