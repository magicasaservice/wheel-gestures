import React from 'react'
import VisuallyHidden from '@reach/visually-hidden'
import c from './Header.module.scss'
import { Link } from 'gatsby'

interface Props {
  siteTitle: string
}

export default function Header({ siteTitle }: Props) {
  return (
    <header className={c.header}>
      <h1 className={c.logo}>
        <VisuallyHidden>wheel gestures {siteTitle}</VisuallyHidden>
        <svg viewBox="0 0 912 56" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path
            d="M33.732 1.5v3.78L.72 1.5h33.012zm0 8.064v3.78L.72 9.564h33.012zm0 8.064v3.78L.72 17.628h33.012zm0 8.064v3.78L.72 25.692h33.012zm0 8.064v3.78L.72 33.756h33.012zm0 8.064v3.78L.72 41.82h33.012zm0 8.148v3.78L.72 49.968h33.012zM63.552 54V34.68h-.924L55.656 54H36.252V1.5h16.716l-1.512 29.316h.504L62.88 1.5h12.684v29.316h.504L85.056 1.5h16.716L84.72 54H63.552zm85.8 0l2.604-15.372h-9.408L139.86 54h-14.112l7.728-44.436h14.196L144.9 24.936h9.492l2.688-15.372h14.196L163.464 54h-14.112zm-26.376-.252l-35.616-3.78h36.288l-.672 3.78zm2.856-16.212l-35.616-3.78h36.288l-.672 3.78zm1.428-8.064l-35.616-3.78h36.288l-.672 3.78zm1.428-8.064l-35.616-3.78h36.288l-.672 3.78zm1.428-8.064L94.5 9.564h36.204l-.588 3.78zM124.404 45.6l-35.616-3.78h36.288l-.672 3.78zm106.212-9.66H218.1l-1.008 5.712h15.54L230.448 54h-29.652l7.728-44.436h29.568l-3.948 12.6h-13.692l-1.008 5.712h12.6l-1.428 8.064zm-32.592 17.808l-35.616-3.78h36.288l-.672 3.78zm2.856-16.212l-35.616-3.78h36.288l-.672 3.78zm1.428-8.064l-35.616-3.78h36.288l-.672 3.78zm1.428-8.064l-35.616-3.78h36.288l-.672 3.78zm1.428-8.064l-35.616-3.78h36.204l-.588 3.78zM199.452 45.6l-35.616-3.78h36.288l-.672 3.78zm96.468-9.66h-12.516l-1.008 5.712h15.54L295.752 54H266.1l7.728-44.436h29.568l-3.948 12.6h-13.692l-1.008 5.712h12.6l-1.428 8.064zm-32.592 17.808l-35.616-3.78H264l-.672 3.78zm2.856-16.212l-35.616-3.78h36.288l-.672 3.78zm1.428-8.064l-35.616-3.78h36.288l-.672 3.78zm1.428-8.064l-35.616-3.78h36.288l-.672 3.78zm1.428-8.064l-35.616-3.78h36.204l-.588 3.78zM264.756 45.6l-35.616-3.78h36.288l-.672 3.78zm93.948 8.4h-27.3l7.728-44.436h14.784l-5.628 32.088h12.6L358.704 54zm-30.072-.252l-35.616-3.78h36.288l-.672 3.78zm2.856-16.212l-35.616-3.78h36.288l-.672 3.78zm1.428-8.064l-35.616-3.78h36.288l-.672 3.78zm1.428-8.064l-35.616-3.78h36.288l-.672 3.78zm1.428-8.064l-35.616-3.78h36.204l-.588 3.78zM330.06 45.6l-35.616-3.78h36.288l-.672 3.78zm99.408 5.88c-6.832 2.52-13.692 3.78-20.58 3.78-6.888 0-11.858-1.372-14.91-4.116-3.052-2.744-4.578-6.972-4.578-12.684 0-2.408.392-5.964 1.176-10.668 1.68-9.744 4.648-16.772 8.904-21.084C403.736 2.396 410.792.24 420.648.24c2.128 0 4.788.224 7.98.672 3.192.448 5.544.952 7.056 1.512l-4.62 12.852c-4.2-.784-8.05-1.176-11.55-1.176s-6.006.28-7.518.84c-1.512.56-2.408 1.68-2.688 3.36l-4.116 23.772h5.292c1.904 0 3.318-.21 4.242-.63.924-.42 1.526-1.386 1.806-2.898l.42-2.268h-4.032l2.268-12.852h19.236l-4.956 28.056zm-41.244-24.108a19.236 19.236 0 0 0-.336 1.848l-33.012-3.528h33.6l-.252 1.68zm-.924 6.384a27.465 27.465 0 0 0-.252 3.528l-33.096-3.528H387.3zm3.192-16.128l-1.008 3.444-32.592-3.444h33.6zm-3.36 24.192c.224 1.568.42 2.744.588 3.528l-32.676-3.528h32.088zm6.804-32.256c-.784 1.456-1.344 2.576-1.68 3.36l-31.416-3.36h33.096zm-4.284 40.404c.728 1.288 1.568 2.324 2.52 3.108l-29.064-3.108h26.544zM401.916 1.5c-1.624 1.008-2.884 1.932-3.78 2.772L372.432 1.5h29.484zm91.764 34.44h-12.516l-1.008 5.712h15.54L493.512 54H463.86l7.728-44.436h29.568l-3.948 12.6h-13.692l-1.008 5.712h12.6l-1.428 8.064zm-32.592 17.808l-35.616-3.78h36.288l-.672 3.78zm2.856-16.212l-35.616-3.78h36.288l-.672 3.78zm1.428-8.064l-35.616-3.78h36.288l-.672 3.78zm1.428-8.064l-35.616-3.78h36.288l-.672 3.78zm1.428-8.064l-35.616-3.78h36.204l-.588 3.78zM462.516 45.6L426.9 41.82h36.288l-.672 3.78zm29.52 4.368h36.288l-1.176 3.78-35.112-3.78zm42.672-32.34c-.336.896-.7 2.156-1.092 3.78l-35.112-3.78h36.204zm-2.1 11.172v.672l-35.616-3.78h35.784c-.112 1.344-.168 2.38-.168 3.108zm-2.772 16.716l-35.028-3.696h36.204l-1.176 3.696zm10.668-35.952c-1.512 1.12-2.66 2.296-3.444 3.528L504.3 9.564h36.204zm-7.14 24.192a9.37 9.37 0 0 0 2.436 3.78l-35.532-3.78h33.096zm33.516-11.004c-3.808-.896-7.056-1.344-9.744-1.344-2.688 0-4.676.084-5.964.252l-.42 2.436 4.2.504c9.016 1.176 13.524 4.9 13.524 11.172 0 .728-.168 2.086-.504 4.074a25.61 25.61 0 0 1-1.68 5.754c-.784 1.848-1.778 3.346-2.982 4.494-1.204 1.148-2.38 2.072-3.528 2.772-1.148.7-2.618 1.19-4.41 1.47-2.8.448-6.538.672-11.214.672s-9.394-.644-14.154-1.932l4.116-12.432c4.368 1.232 8.19 1.848 11.466 1.848s5.586-.084 6.93-.252l.42-2.688-5.292-.588c-4.536-.504-7.756-1.568-9.66-3.192s-2.856-3.948-2.856-6.972c0-1.12.14-2.52.42-4.2 1.12-5.992 3.136-10.136 6.048-12.432 2.912-2.296 7.35-3.444 13.314-3.444s11.298.588 16.002 1.764l-4.032 12.264zm68.328-.588h-9.072L620.592 54h-14.784l5.544-31.836h-9.324l2.268-12.6h33.18l-2.268 12.6zm-31.92 31.584l-35.616-3.78h36.288l-.672 3.78zm2.856-16.212l-35.616-3.78h36.288l-.672 3.78zm1.428-8.064l-35.616-3.78h36.288l-.672 3.78zm-8.064-8.064l-35.616-3.78h36.288l-.672 3.78zm1.428-8.064l-35.616-3.78h36.204l-.588 3.78zm3.78 32.256L569.1 41.82h36.288l-.672 3.78zm57.576-8.064l-35.616-3.78h36.288l-.672 3.78zm1.428-8.064l-35.616-3.78h36.288l-.672 3.78zm1.428-8.064l-35.616-3.78h36.288l-.672 3.78zm1.428-8.064l-35.616-3.78h36.204l-.588 3.78zm-4.62 28.476v1.68c0 .952.028 1.652.084 2.1l-35.616-3.78h35.532zm3.276 11.928l-35.616-3.78h33.18c.616 1.568 1.428 2.828 2.436 3.78zm17.22-11.508c1.512 0 2.562-.182 3.15-.546.588-.364.994-1.246 1.218-2.646l5.292-29.484h14.112l-4.368 25.032c-1.344 7.84-3.514 13.202-6.51 16.086-2.996 2.884-8.106 4.326-15.33 4.326-5.768 0-9.8-.854-12.096-2.562-2.296-1.708-3.444-4.69-3.444-8.946 0-2.352.308-5.32.924-8.904l4.452-25.032h14.112l-5.712 32.676h4.2zM762.54 9.564c8.176 0 12.264 3.696 12.264 11.088 0 3.36-.672 6.846-2.016 10.458-1.344 3.612-3.612 6.314-6.804 8.106L770.772 54h-15.708l-3.192-12.936h-2.016L747.588 54h-14.112l7.728-44.436h21.336zm-3.108 14.532c0-.056.028-.336.084-.84 0-.952-1.484-1.428-4.452-1.428h-1.848l-1.344 7.728h2.688c2.576 0 4.032-.84 4.368-2.52l.504-2.94zm-28.728 29.652l-35.616-3.78h36.288l-.672 3.78zm2.856-16.212l-35.616-3.78h36.288l-.672 3.78zm1.428-8.064l-35.616-3.78h36.288l-.672 3.78zm1.428-8.064l-35.616-3.78h36.288l-.672 3.78zm1.428-8.064l-35.616-3.78h36.204l-.588 3.78zM732.132 45.6l-35.616-3.78h36.288l-.672 3.78zm101.928-9.66h-12.516l-1.008 5.712h15.54L833.892 54H804.24l7.728-44.436h29.568l-3.948 12.6h-13.692l-1.008 5.712h12.6l-1.428 8.064zm-32.592 17.808l-35.616-3.78h36.288l-.672 3.78zm2.856-16.212l-35.616-3.78h36.288l-.672 3.78zm1.428-8.064l-35.616-3.78h36.288l-.672 3.78zm1.428-8.064l-35.616-3.78h36.288l-.672 3.78zm1.428-8.064l-35.616-3.78h36.204l-.588 3.78zM802.896 45.6l-35.616-3.78h36.288l-.672 3.78zm29.52 4.368h36.288l-1.176 3.78-35.112-3.78zm42.672-32.34c-.336.896-.7 2.156-1.092 3.78l-35.112-3.78h36.204zm-2.1 11.172v.672l-35.616-3.78h35.784c-.112 1.344-.168 2.38-.168 3.108zm-2.772 16.716l-35.028-3.696h36.204l-1.176 3.696zm10.668-35.952c-1.512 1.12-2.66 2.296-3.444 3.528l-32.76-3.528h36.204zm-7.14 24.192a9.37 9.37 0 0 0 2.436 3.78l-35.532-3.78h33.096zm33.516-11.004c-3.808-.896-7.056-1.344-9.744-1.344-2.688 0-4.676.084-5.964.252l-.42 2.436 4.2.504c9.016 1.176 13.524 4.9 13.524 11.172 0 .728-.168 2.086-.504 4.074a25.61 25.61 0 0 1-1.68 5.754c-.784 1.848-1.778 3.346-2.982 4.494-1.204 1.148-2.38 2.072-3.528 2.772-1.148.7-2.618 1.19-4.41 1.47-2.8.448-6.538.672-11.214.672s-9.394-.644-14.154-1.932l4.116-12.432c4.368 1.232 8.19 1.848 11.466 1.848s5.586-.084 6.93-.252l.42-2.688-5.292-.588c-4.536-.504-7.756-1.568-9.66-3.192s-2.856-3.948-2.856-6.972c0-1.12.14-2.52.42-4.2 1.12-5.992 3.136-10.136 6.048-12.432 2.912-2.296 7.35-3.444 13.314-3.444s11.298.588 16.002 1.764l-4.032 12.264z"
            fill="#FF4949"
          />
        </svg>
      </h1>

      <nav className={c.nav}>
        <Link to="/">Wheel Drag</Link>
        <Link to="/gallery">Gallery</Link>
      </nav>
    </header>
  )
}