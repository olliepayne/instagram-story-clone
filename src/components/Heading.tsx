interface Heading {
  level: "h1" | "h2" | "h3" | "h4"
}

export default function Heading({ level }: Heading) {
  switch (level) {
    case "h1":
      return <h1></h1>
    case "h2":
      return <h2></h2>
    case "h3":
      return <h3></h3>
    case "h4":
      return <h4></h4>
  }
}
