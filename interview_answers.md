# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?
Stateful components keep track of changing data while functional components just return whatever is given to them through props.

2. When does a componentWillMount function be called? What about a componentWillUpdate?
componentWillMount is invoked immediately before mounting occurs, and componentWillUpdate is invoked immediately before an update occurs.

3. Define stateful logic.
Stateful or business logic is any code that manipulates state. This includes instantiating the useState hook and any functions that call on setState. This does not include functions that look at state or use the current state for rendering.

4. What are the three step of creating a successful test? What is done in each phase?

The three steps to a successful test are:
Arrange - Render component with necessary props/mock functions and define inputs required for tests
Act - Perform any userEvents needed to show the results being tested
Assert - Check to see if results are as expected