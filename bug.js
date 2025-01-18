```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect usage of setInterval. The callback function is not properly unmounted, leading to memory leaks.
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    // Missing cleanup function to clear the interval when the component unmounts
    // or when the component re-renders.
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <div>Count: {count}</div>;
}
```