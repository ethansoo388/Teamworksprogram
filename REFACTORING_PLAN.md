# Image Refactoring Plan

## Status: ✅ All Images Found in src/assets/img

## Files to Update (15 files)

1. `/src/app/components/HeroSection.tsx`
2. `/src/app/components/WhyTeamWorks.tsx`
3. `/src/app/components/TestimonialsSection.tsx`
4. `/src/app/components/CoursePage.tsx`
5. `/src/app/components/Course02Page.tsx`
6. `/src/app/components/Course03Page.tsx`
7. `/src/app/components/CoursesSection.tsx`
8. `/src/imports/CiAgileMainEthanWorkingMergeBranch.tsx`
9. `/src/imports/CiAgileMainFrozenPreMergeBranch-8009-391.tsx`
10. `/src/site/components/main/AboutHero.tsx`
11. `/src/site/components/main/ContactFormSection.tsx`
12. `/src/site/components/main/MainSiteNavigation.tsx`
13. `/src/site/components/teamworks/v2/HeroSectionV2.tsx`
14. `/src/site/components/teamworks/v2/WhyDifferentV2.tsx`
15. `/src/site/components/teamworks/v2/DiscoverCoursesV2.tsx`

## Image Replacements

### External URLs → Local Images

#### Unsplash Images (10)
1. `https://images.unsplash.com/photo-1747146114146-8b8597a53ad4...` 
   → `@/assets/img/group-gathered-around-table-outdoor-activity.jpg`
   - Alt: "TeamWorks hands-on training workshop with participants collaborating on team exercises"

2. `https://images.unsplash.com/photo-1739298061766-e2751d92e9db...`
   → `@/assets/img/team-celebration-high-five-with-laptop.jpg`
   - Alt: "Business team celebrating successful training outcomes and improvements"

3. `https://images.unsplash.com/photo-1759646828783-7e1b8f02f89b...`
   → `@/assets/img/hands-examining-clay-pot.jpg`
   - Alt: "TeamWorks workshop participants collaborating hands-on during training session"

4. `https://images.unsplash.com/photo-1646066490017-c935b1a1eb0f...`
   → `@/assets/img/team-working-together-sticky-note-on-wall.jpg`
   - Alt: "Agile team collaboration"

5. `https://images.unsplash.com/photo-1758691736424-4b4273948341...`
   → `@/assets/img/business-presentation-meeting-room.jpg`
   - Alt: "JESS (Jeff Sutherland's Enterprise Scrum System)"

6. `https://images.unsplash.com/photo-1765438863717-49fca900f861...`
   → `@/assets/img/presenter-at-flip-chart-black-and-white.jpg`
   - Alt: "Corporate training and consulting"

7. `https://images.unsplash.com/photo-1758691737278-3af15b37af48...`
   → `@/assets/img/one-on-one-office-discussion-with-laptop.jpg`
   - Alt: "Business team meeting"

8. `https://images.unsplash.com/photo-1735639013995-086e648eaa38...` (with params)
   → `@/assets/img/sticky-notes-on-whiteboard-workshop-wide.jpg`
   - Alt: "Team collaboration and problem-solving"

9. `https://images.unsplash.com/photo-1768796370577-c6e8b708b980...`
   → `@/assets/img/group-working-together-leaning-on-table.jpg`
   - Alt: "Team collaboration and workshop"

10. `https://images.unsplash.com/photo-1735639013995-086e648eaa38` (no params)
    → `@/assets/img/sticky-notes-on-whiteboard-workshop.jpg`
    - Alt: "Team collaborating in workshop"

#### PostImg.cc Images (16)
11. `https://i.postimg.cc/8zQjWkXx/...`
    → `@/assets/img/high-energy-team-standing-together-smiling.jpg`
    - Alt: "TeamWorks Creating Super Teams workshop with participants actively engaged in Agile training"

12. `https://i.postimg.cc/SQ1hX6rN/...`
    → `@/assets/img/Successful-asia-agile-team-doing-work-and-having-fun-in-workshop-activities-classroom-environment.jpg`
    - Alt: "Successful Agile team having fun during hands-on workshop activities in classroom setting"

13. `https://i.postimg.cc/wBFsdRQS/...`
    → `@/assets/img/professional-woman-thinking-with-pen.jpg`
    - Alt: "Workshop participant using design thinking tools to develop customer-focused solutions"

14. `https://i.postimg.cc/65mXFWZH/...`
    → `@/assets/img/product-design-customer-experience-creative-work.jpg`
    - Alt: "Understanding Real Customer Problems"

15. `https://i.postimg.cc/8zmqNTJd/...`
    → `@/assets/img/team-working-on-ideas-sticky-notes-brainstorming.jpg`
    - Alt: "Mapping the Customer Experience"

16. `https://i.postimg.cc/7YGHHJwn/...`
    → `@/assets/img/team-working-on-ideas-group-discussion.jpg`
    - Alt: "Turning Insights into Better Ideas"

17-26. (Other PostImg URLs to be mapped based on alt text)

#### Figma Assets → Local PNG
27. `figma:asset/f44f1eee345558c40d51a3aa3e2b9fceb7432cdb.png`
    → `@/assets/img/enterprise-team-delivery-systems-execution-frameworks.png`
    - Alt: "Enterprise team working on delivery systems and execution frameworks"

28. `figma:asset/e663da3af181c9fc2508e76fec0498f833ff10f0.png`
    → `@/assets/img/ci-agile-consulting-approach-methodology-overview.png`
    - Alt: "CI Agile consulting approach and methodology overview"

29. `figma:asset/b8d869daa88d48a6817babfc3c89c4ce9638444a.png`
    → `@/assets/img/Ethan-picture.jpg` (use JPG version instead of PNG)
    - Alt: "Ethan Soo, Founder of CI Agile"

30. `figma:asset/40b1d8b8c250769ef13971a417b0e95fe4fbfc1f.png`
    → `@/assets/img/team-collaboration-problem-solving-workshop.png`
    - Alt: "Team collaboration and problem-solving workshop"

31. `figma:asset/fd7a81c1c75169f5c53cda037245ef314f926517.png`
    → `@/assets/img/ci-agile-logo.png`
    - Alt: "CI Agile Logo"

## Critical Errors: NONE ✅

All expected images are present in src/assets/img!

## Warnings:
- Some images have "duplicate" versions (e.g., hands-examining-clay-pot-duplicate.jpg)
- May need to decide which version to use

## Next Steps:
1. Update all 15 files to use local imports
2. Update alt text to match the mapping
3. Test the build
4. Remove unused external URL references
