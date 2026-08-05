%%Identification
%%The class identifies itself and the LaTeX version needed
\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{qirtconference}

%% Main class options
\LoadClass[a4paper, onecolumn]{article} % Load default options for the class

%% --- Packages requirements
\input{qirtconference-requirements.sty}

% Setup margins 
\geometry{left=2cm, right=2cm, top=1cm, bottom=3cm,includehead,includefoot,footskip=2.7cm}
% Setup fonts

%\setsansfont{Liberation Sans}
%\setmainfont{Liberation Sans}

% Setup URL colors
\DeclareUrlCommand{\url}{%
\def\UrlFont{\color{blue}\normalfont}%      Adding a little color 
\def\UrlLeft##1\UrlRight{\underline{##1}}%  Underlining the url
}

\renewcommand*\familydefault{\sfdefault} %% Only if the base font of the document is to be sans serif

%%This parts handles the options passed to the class.
\newcommand{\@abstracttype}{extended} % short or extended

\DeclareOption{short}{ % Short abstract
  \renewcommand{\@abstracttype}{short} % short or extended
}
\DeclareOption{extended}{ % Extended abstract
  \renewcommand{\@abstracttype}{extended} % short or extended
}
\newcommand{\license}{\includegraphics[height=0.7cm]{img/license.png}\\ {\tiny License: \url{https://creativecommons.org/licenses/by/4.0/deed.en}}} % License BY by default
\DeclareOption{license}{ % Show th CC license
  \renewcommand{\license}{\includegraphics[height=0.7cm]{img/license.png}\\ {\tiny License: \url{https://creativecommons.org/licenses/by/4.0/deed.en}}} % short or extended
}
\DeclareOption{license_nd}{ % Show th CC license
  \renewcommand{\license}{\includegraphics[height=0.7cm]{img/license-nd.png}\\ {\tiny License: \url{https://creativecommons.org/licenses/by-nd/4.0/deed.en}}} % short or extended
}


\DeclareOption{twocolumn}{\OptionNotUsed} % Force the two column not to be used
\DeclareOption*{\PassOptionsToClass{\CurrentOption}{article}} % Pass options to the class
\ProcessOptions\relax % Process options
%% 

%% Variables
%\makeatletter
\def\@conferencenumber{6}
\newcommand\conferencenumber[1]{\def\@conferencenumber{#1}}

\def\@conferencedate{8-9 March 2027}
\newcommand\conferencedate[1]{\def\@conferencedate{#1}}

\def\@conferencecity{Marina Bay Sands}
\newcommand\conferencecity[1]{\def\@conferencecity{#1}}

\def\@conferencecountry{Singapore}
\newcommand\conferencecountry[1]{\def\@conferencecountry{#1}}

\def\@conferencesite{qirtasia2027.com}
\newcommand\conferencesite[1]{ydef\@conferencesite{#1}}

\def\@titleheader{\nth{\@conferencenumber} Asian Quantitative InfraRed Thermography Conference}
\def\@topheader{\nth{\@conferencenumber} Asian Quantitative InfraRed Thermography Conference, \@conferencedate, \@conferencecity, \@conferencecountry }

%\makeatother

%% Colors
\definecolor{qirt-color}{HTML}{2F2A85}
% Set main color
\color{black}



%% Headers and footers
\RequirePackage{fancyhdr}
% Header different for titlepage
\fancypagestyle{qirtconference-title}{
  \setlength{\headheight}{0pt} % Letterhead is drawn in the body by \maketitle instead
  \renewcommand{\headrulewidth}{0pt} % Remove the top line
  \fancyhf{} % No top header
  \cfoot{} % No page numbering
  \lfoot{\license} % Footer
}
\fancypagestyle{qirtconference}{
  \setlength{\headheight}{1.2cm}
  \renewcommand{\headrule}{\hbox to\headwidth{\color{qirt-color}\leaders\hrule height \headrulewidth\hfill}}
  \renewcommand{\headrulewidth}{1pt} % Set the top line
  \fancyhf{} % No top header
  \rhead{} % No top header
  \lhead{} % No top header
  \chead{\textcolor{qirt-color}{\@topheader}}
  \cfoot{} % No page numbering
}
\pagestyle{qirtconference} % Set the fancy headers

\newcommand{\checkempty}[3]{
\if\relax #1\relax #2\else #3\fi
}


%% For authors handling
\edef\@authorsString{}
\edef\@affilsString{}
\renewcommand{\author}[2][*]{
  \checkempty{\@authorsString}{\g@addto@macro\@authorsString{#2\textsuperscript{#1}}}{\g@addto@macro\@authorsString{, #2\textsuperscript{#1}}}
  
}


\newcommand{\affiliation}[2][*]{
  \g@addto@macro\@affilsString{
    \tabto{1cm}$^{#1}$\tabto{1.6cm}#2\\
  }
}
\newcommand{\insertauthors}{\@authorsString}
\newcommand{\insertaffiliation}{\@affilsString}

%% Letterhead banner: logo on the left, illustrated skyline banner with the
%% conference tagline on the right - matches the official Word template header.
\newcommand{\qirtletterhead}{%
  \noindent
  \begin{minipage}[c]{0.34\textwidth}
    \includegraphics[width=\linewidth]{img/logo.png}
  \end{minipage}%
  \hfill
  \begin{minipage}[c]{0.62\textwidth}
    \includegraphics[width=\linewidth]{img/HeaderImage.png}\\[4pt]
    \centering{\itshape\color{qirt-color}\@titleheader}
  \end{minipage}
  \vspace{0.3cm}\\
  \noindent\rule{\linewidth}{0.4pt}
  \vspace{0.4cm}
}

%%Body of the class, most of the declarations appear here.
\renewcommand{\maketitle}{%
  \thispagestyle{qirtconference-title}
  \qirtletterhead
  \noindent{\large\bfseries\checkempty{\@title}{Title of your abstract here.}{\@title}}\\
  \vspace{0.5cm}
  \hspace*{\fill}\checkempty{\@authorsString}{by A. Author*, B.Author*, C. Author*}{by \insertauthors}\\
  {\itshape\insertaffiliation}
  \vspace{0.5cm}
}

\renewenvironment{abstract}
{
  {\normalfont\huge\bfseries\section*{Abstract}}}{\vspace{0.6cm}}

%% Customize the sections titles
\titleformat{\section}[block]
  {\normalfont\normalsize\bfseries}
  {\thesection.}
  {9pt}
  {}

\titlespacing*{\section}{0pt}{14pt}{9pt}

\titleformat{\subsection}[block]
  {\hspace{0.5cm}\normalfont\normalsize\bfseries}{\thesubsection}{9pt}{}

\titlespacing*{\subsection}{0pt}{9pt}{9pt}

\titleformat{\subsubsection}[block]
  {\hspace{0.5cm}\normalfont\normalsize\bfseries\itshape}{\thesubsubsection}{9pt}{}
\titlespacing*{\subsubsection}
  {0pt}{9pt}{9pt}

\titleformat{\paragraph}[runin]
  {\normalfont\normalsize\bfseries}{}{20pt}{}
\titlespacing*{\paragraph}
  {0pt}{10pt}{10pt}

\captionsetup[figure]{labelfont={bf},name={Fig.},labelsep=period,textfont={it}}
\captionsetup[table]{labelfont={bf},name={Table},labelsep=period,textfont={it}}


\setcounter{tocdepth}{3}
\setcounter{secnumdepth}{3}

\renewcommand{\normalsize}{\fontsize{9}{10}\selectfont}
%\setlength{\textwidth}{17.5cm}
%\setlength{\textheight}{22cm}
\setlength{\parindent}{1.27cm}
\pagenumbering{arabic}

\newenvironment{itemize*}%
  {\begin{itemize}%
    \setlength{\itemsep}{0pt}%
    \setlength{\parskip}{0pt}}%
  {\end{itemize}}

\AtBeginDocument{\color{black}}
\AtBeginDocument{\bibliographystyle{unsrt}}
