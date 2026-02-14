export function FooterV2() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-3xl mb-4 tracking-tight font-semibold">TeamWorks</div>
            <p className="text-gray-600 max-w-md leading-relaxed">
              Fun, hands-on training workshops for SME teams across Southeast Asia. 
              Transform your team in just 2 days.
            </p>
          </div>

          {/* Courses */}
          <div>
            <h4 className="mb-4 text-sm tracking-wider uppercase text-gray-500 font-semibold">Courses</h4>
            <div className="space-y-3 text-sm">
              <div><a href="creating-super-teams.html" className="hover:text-gray-600 transition-colors">Creating Super Teams</a></div>
              <div><a href="design-thinking.html" className="hover:text-gray-600 transition-colors">Win Customers Through Design</a></div>
              <div><a href="critical-thinking-kanban.html" className="hover:text-gray-600 transition-colors">Critical Thinking for Better Work</a></div>
              <div><a href="practical-lean-problem-solving.html" className="hover:text-gray-600 transition-colors">Practical Lean Problem Solving</a></div>
              <div><a href="ai-skills-for-your-team.html" className="hover:text-gray-600 transition-colors">AI Skills for YOUR Team</a></div>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-sm tracking-wider uppercase text-gray-500 font-semibold">Company</h4>
            <div className="space-y-3 text-sm">
              <div><a href="../aboutus.html" className="hover:text-gray-600 transition-colors">About Us</a></div>
              <div><a href="../contactus.html" className="hover:text-gray-600 transition-colors">Contact Us</a></div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-500">
            © 2026 TeamWorks. All rights reserved.
          </div>
          <div className="flex gap-8 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}