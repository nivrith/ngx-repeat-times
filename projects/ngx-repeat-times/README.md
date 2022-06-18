# NGX Repeat Times

<div id="top"></div>

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- [![Contributors][contributors-shield]][contributors-url] -->
<!-- [![Forks][forks-shield]][forks-url] -->
<!-- [![Stargazers][stars-shield]][stars-url] -->

[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->s
<div align="center">

  <h3 align="center">Ngx Repeat Times</h3>
  <h4 align="center">
 Steal this elegant trick right now to repeat templates without <code>*ngFor</code>
  </h4>
  <br />
</div>

When you need to repeat templates based on a number rather than a collection or iterable like this:

```html
<div *repeatTimes="length; index as i">
  {{ i }} This will render {{ length }} times
</div>
```

## Installation

```shell

npm install ngx-repeat-times

```

Add the `NgxRepeatTimesModule` to the `imports` array of the `NgModule` decorator

```ts
import { NgxRepeatTimesModule } from "ngx-repeat-times";

@NgModule({
  //...
  imports: [
    //...
    NgxRepeatTimesModule,
    //...
  ],
  //...
})
export class ExampleModule {}
```

## Usage

```html
<!-- some.component.html -->

<div *repeatTimes="length; index as i">
  {{ i }} This will render {{ length }} times
</div>

<!-- or -->

<div *repeat="let index times length;">
  {{ index }} This will render {{ length }} times
</div>
```

  <p align="center">
    <!-- <a href="https://github.com/nivrith/ngx-repeat-times"><strong>Explore the docs »</strong></a> -->
    <a href="https://github.com/nivrith/ngx-repeat-times">View Source</a>
    ·
    <a href="https://github.com/nivrith/ngx-repeat-times/issues">Report Bug</a>
    ·
    <a href="https://github.com/nivrith/ngx-repeat-times/issues">Request Feature</a>

  </p>
  <p align="center">
    <!-- <a href="https://github.com/nivrith/ngx-repeat-times"><strong>Explore the docs »</strong></a> -->
    🚀 &nbsp; Declarative ·
    🎉 &nbsp; Very Simple to use ·
    🍻 &nbsp; No Need to Hacking NgFor ·

  </p>
</div>

<!-- ABOUT THE PROJECT -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.md` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Nivrith - [@\_Nivrith\_](https://twitter.com/_Nivrith_) - nivrithgomatam@gmail.com

Project Link: [https://github.com/nivrith/ngx-repeat-times](https://github.com/your_username/ngx-repeat-times)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/nivrith/ngx-repeat-times.svg?style=for-the-badge
[contributors-url]: https://github.com/nivrith/ngx-repeat-times/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/nivrith/ngx-repeat-times.svg?style=for-the-badge
[forks-url]: https://github.com/nivrith/ngx-repeat-times/network/members
[stars-shield]: https://img.shields.io/github/stars/nivrith/ngx-repeat-times.svg?style=for-the-badge
[stars-url]: https://github.com/nivrith/ngx-repeat-times/stargazers
[issues-shield]: https://img.shields.io/github/issues/nivrith/ngx-repeat-times.svg?style=for-the-badge
[issues-url]: https://github.com/nivrith/ngx-repeat-times/issues
[license-shield]: https://img.shields.io/github/license/nivrith/ngx-repeat-times.svg?style=for-the-badge
[license-url]: https://github.com/nivrith/ngx-repeat-times/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/nivrith
[product-screenshot]: ngx-repeat-times-readme-image.svg
