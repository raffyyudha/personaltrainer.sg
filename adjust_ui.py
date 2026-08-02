import os

project_dir = r"c:\Users\wcast\Downloads\personal-trainer-main\personal-trainer-main"

def adjust_page():
    path = os.path.join(project_dir, "src", "app", "page.tsx")
    if not os.path.exists(path):
        return
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Revert full-width banner image
    content = content.replace('src="/trainwith.png"\n              alt="Gym workout action shot"', 'src="https://ext.same-assets.com/3485311241/2686555212.jpeg"\n              alt="Gym workout action shot"')
    content = content.replace('src="/trainwith.png"\r\n              alt="Gym workout action shot"', 'src="https://ext.same-assets.com/3485311241/2686555212.jpeg"\n              alt="Gym workout action shot"')

    # Increase font size of text under titles
    content = content.replace('className="text-white text-sm leading-relaxed mb-8 space-y-4"', 'className="text-white text-base md:text-lg leading-relaxed mb-8 space-y-4"')
    content = content.replace('className="text-white text-sm leading-relaxed"', 'className="text-white text-base leading-relaxed"')
    content = content.replace('className="text-white text-sm leading-relaxed mb-8"', 'className="text-white text-base leading-relaxed mb-8"')
    content = content.replace('className="text-white text-sm leading-relaxed mb-6 space-y-3"', 'className="text-white text-base leading-relaxed mb-6 space-y-3"')
    content = content.replace('className="text-white text-sm mb-8 leading-relaxed"', 'className="text-white text-base mb-8 leading-relaxed"')

    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print("Adjusted page.tsx")


def adjust_about():
    path = os.path.join(project_dir, "src", "app", "about", "page.tsx")
    if not os.path.exists(path):
        return
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Increase font size of biography and texts under titles
    content = content.replace('className="text-white text-sm leading-relaxed mb-8 space-y-4 font-sans"', 'className="text-white text-base md:text-lg leading-relaxed mb-8 space-y-4 font-sans"')
    content = content.replace('className="text-white text-sm md:text-base max-w-xl mb-8 leading-relaxed font-sans space-y-4"', 'className="text-white text-base md:text-lg max-w-xl mb-8 leading-relaxed font-sans space-y-4"')
    
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print("Adjusted about/page.tsx")


def adjust_services():
    path = os.path.join(project_dir, "src", "app", "services", "page.tsx")
    if not os.path.exists(path):
        return
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Increase font size of philosophy and texts under titles
    content = content.replace('className="text-white text-sm md:text-base leading-relaxed space-y-4 max-w-3xl font-sans"', 'className="text-white text-base md:text-lg leading-relaxed space-y-4 max-w-3xl font-sans"')
    
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print("Adjusted services/page.tsx")


def adjust_result():
    path = os.path.join(project_dir, "src", "app", "result", "page.tsx")
    if not os.path.exists(path):
        return
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Increase font size of intro text under title
    content = content.replace('className="text-white text-sm md:text-base leading-relaxed space-y-4 max-w-3xl mx-auto font-sans"', 'className="text-white text-base md:text-lg leading-relaxed space-y-4 max-w-3xl mx-auto font-sans"')
    content = content.replace('className="text-white text-sm md:text-base max-w-2xl mx-auto mb-6 leading-relaxed font-sans normal-case tracking-normal font-normal"', 'className="text-white text-base md:text-lg max-w-2xl mx-auto mb-6 leading-relaxed font-sans normal-case tracking-normal font-normal"')
    
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print("Adjusted result/page.tsx")


def adjust_contact():
    path = os.path.join(project_dir, "src", "app", "contact", "page.tsx")
    if not os.path.exists(path):
        return
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Increase font size of contact instructions under title
    content = content.replace('className="text-white text-sm leading-relaxed mb-6 space-y-4 font-sans"', 'className="text-white text-base md:text-lg leading-relaxed mb-6 space-y-4 font-sans"')
    
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print("Adjusted contact/page.tsx")


if __name__ == "__main__":
    adjust_page()
    adjust_about()
    adjust_services()
    adjust_result()
    adjust_contact()
