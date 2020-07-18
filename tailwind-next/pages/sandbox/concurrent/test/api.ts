// this is just a fake module to simulate interacting with a server

const sleep = (time) =>
  new Promise((resolve) => {
    setTimeout(resolve, time)
  })

async function savePost(postData) {
  await sleep(1000)
  return { data: { post: postData } }
}

const greetings = ['Hello', 'Hi', 'Hey there', "What's up", 'Howdy', "G'day"]

async function fetchRandomGreeting() {
  await sleep(1000)
  return greetings[Math.floor(Math.random() * greetings.length)]
}

// a fire-and-forget function to report errors
// for componentDidCatch
async function reportError() {
  await sleep(1000)
  return { success: true }
}

async function submitForm() {
  await sleep(1000)
  return { success: true }
}

// simulate the network request time...

async function loadGreeting(subject) {
  return { data: { greeting: `${await fetchRandomGreeting()} ${subject}` } }
}

export { savePost, loadGreeting, reportError, submitForm }
