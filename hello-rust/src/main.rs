use std::io;

fn main() {
   
    let mut input = String::new();
    println!("Enter a string:");
    io::stdin().read_line(&mut input).expect("no input");
    let vowel_count = input.chars()
        .filter(|c| "aeiouAEIOU".contains(*c))
        .count();

    println!("Number of vowels: {}", vowel_count);
}