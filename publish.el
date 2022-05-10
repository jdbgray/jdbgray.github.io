(require 'ox-publish)

(setq org-publish-project-alist
      '(
	("org-notes"
	 :base-directory "~/Documents/Blog/org/"
	 :base-extension "org"
	 :publishing-directory "~/Documents/Blog/docs/"
	 :recursive t
	 :publishing-function org-html-publish-to-html
	 :headline-levels 4
	 :auto-postamble nil
	 )

	("org-static"
	 :base-directory "~/Documents/Blog/org/"
	 :base-extension "css\\|js\\|png\\|jpg\\|gif\\|pdf\\|mp3\\|ogg\\|swf"
	 :publishing-directory "~/Documents/Blog/docs/"
	 :recursive t
	 :publishing-function org-publish-attachment
	 :auto-postamble nil
	 )

	("org"
	 :components ("org-notes" "org-static")
	 :auto-postamble nil)	
	))

	
