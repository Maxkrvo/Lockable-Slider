# Lockable-Slider

This project involves a swipeable slider which can take in an array of items. The slides are individually lockable (without using duplications). For example; when slide 1 is locked and the other slides are swiped through, upon unlocking slide 1 again it gets put back in the new order of items.

# Motivation

Due to a customer wanting a custom solution for a product slider I had to think creatively on how to implement said custom solutions. I have been looking online if it was possible to use existing solutions for our own benefit but those solutions weren't up to par. It also seemed like a fun and challenging component to make myself, combining this with the fact that exisiting solutions weren't applicable the decision was made to create a fully custom Lockable Slider.

# Tech/framework used

- React
- TypeScript
- React Swipeable
- Ionic v4

# Features

- A Swipeable slider.
- Slides are individually lockable.
- If slides are unlocked when the order of items have changed the unlocked slide gets put in the new order of items instead of the original order.
- If the slide is locked a button will be shown where you can for example link through a product detail page.
- If the slide is locked a label will be shown which can display for example the price and/or name of the product inside the slide.

# Installation

- Copy the HTTPS link 'https://github.com/Maxkrvo/Lockable-Slider.git'.
- Open your terminal.
- Change the current working directory to the location where you want the cloned directory to be made.
- Type git clone and then paste the URL you copied above. 'git clone https://github.com/Maxkrvo/Lockable-Slider.git'.
- Press Enter and your local clone of the repository will be created.
- Start the project by running 'ionic serve' inside the terminal (Make sure you are inside the folder of the repository).
