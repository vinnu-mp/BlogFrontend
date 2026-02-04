const Container = ({ children }) => {
  return <div className="w-full max-w-7xl mx-auto px-4">{children}</div>;
};

export default Container;

/*

==> What it actually does

Sets max width
Centers content
Adds padding

Prevents UI stretching full screen

It is just a UI wrapper

*/
