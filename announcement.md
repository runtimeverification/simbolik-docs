Today we're launching the Simbolik Contributor Program — a way for developers who use and value our tools to contribute financially to their continued development. Before we get into the details, we want to tell you why.

## Who we are, and what we've built

Runtime Verification is one of the largest open-source developer tooling providers in the blockchain space. If you've worked in Ethereum security or formal verification, chances are you've crossed paths with our work at some point.

Our open-source story in Ethereum goes back to 2017, when KEVM — the first complete formal specification of the Ethereum Virtual Machine — was born out of a hackathon win at Cornell. What started as an academic exercise became a foundational piece of Ethereum infrastructure. Nearly a decade later, KEVM remains the longest-standing formal EVM specification, continuously maintained and improved. It's been used in research, in production audits, and as a reference implementation by teams across the ecosystem.

From that foundation, we built [Kontrol](https://kontrol.runtimeverification.com/) — a formal verification tool used by dozens of teams to mathematically prove critical safety and liveness properties about their smart contracts using the same Foundry test format they already know. Kontrol bridges the gap between the rigor of formal methods and the practical workflows developers actually use. No separate specification language. No parallel test suite. You write Foundry tests, and Kontrol proves they hold for all possible inputs — not just the ones you thought to check. Like KEVM, Kontrol is free and open source software.

And then there's [Simbolik](https://www.simbolik.dev/) — our all-in-one security toolbox that brings together debugging, static analysis, and fuzzing capabilities into a single development environment. Simbolik is where we're concentrating our efforts to make the full power of our tooling accessible to every Solidity developer, not just formal methods specialists.

Over the years, Runtime Verification has invested millions of dollars into these and other open-source tools. Not as a marketing strategy, not as a loss leader for consulting services — because building in the open is who we are. Accessible, free, and open-source developer tools are part of our DNA. Our CEO Everett recently wrote about this in [The RV Ethos](https://runtimeverification.com/blog/the-rv-ethos), where he described how RV's culture of transparency and solidarity shapes everything we do — from how we treat each other internally to how we build and release software.

*Of course* we develop our software in the open. *Of course* we upstream fixes into other projects we use and love. That's how this is supposed to work.

But we also need to be honest with you about something.

## The economics of open source

Open-source software has a well-known sustainability problem, and it's worth spelling out clearly because too many conversations about it stay vague.

Open-source tools are public goods. Like any public good — clean air, public parks, Wikipedia — they suffer from the free-rider dynamic: everyone benefits, but the cost of building and maintaining them falls on a small group of people. This isn't a moral failing on anyone's part. It's just how public goods work, and pretending otherwise doesn't help anyone.

In the blockchain space specifically, the pattern goes something like this. A team gets a grant to build a tool. They build the tool. Developers adopt it. The grant money runs out. The team tries to get another grant, maybe succeeds once or twice. Eventually the grants dry up, the maintainers move on to paid work, and the tool enters a slow decline. Issues pile up. Pull requests are abandoned. Documentation falls behind. Developers who built workflows around the tool either fork it, find an alternative, or just deal with the growing list of rough edges.

This isn't hypothetical — it's the default outcome for most grant-funded open-source projects. And it's not because the teams behind them don't care. It's because caring doesn't pay rent.

At Runtime Verification, the only direct income our open-source tools generate comes through grant programs and, to a lesser extent, the consulting engagements they help bring in. We are incredibly grateful for the grants we've received — from the Ethereum Foundation, Optimism, and others. Truly. They made it possible to start building tools that thousands of developers now rely on daily.

But here's the reality: grants typically cover only a fraction of the true long-term cost of maintaining these tools. Initial development is expensive, yes, but it's the years of maintenance, improvement, bug fixes, compatibility updates, documentation, and user support that really add up. That ongoing work is largely invisible and almost never fully funded.

Runtime Verification is different, and we take some quiet pride in that. When we build something, we commit to it. We've maintained tools for years — sometimes many years — after the grant funding that seeded them was exhausted. KEVM has been continuously developed since 2017. Kontrol has been actively improved through bull markets and bear markets alike. That's not a grant cycle; that's a long-term commitment funded in large part out of our own revenue from auditing and consulting work.

As Everett described in the RV Ethos, there was a period where the whole team collectively agreed to take lower base pay so that we could keep investing in our tools rather than abandoning them when the market turned cold. That decision — made collectively, with full financial transparency — is a reflection of what kind of team we are. We're not a company that happens to maintain some open-source projects on the side. We're a team of people who genuinely believe in this work.

But you may have already guessed: this is a very hard model to sustain indefinitely.

## What we're doing about it

We've thought long and hard about how to keep building the tools our community depends on without compromising on what makes them valuable in the first place. We don't want to put critical security tooling behind a paywall. We don't want to rug-pull developers who've built workflows around our free tools. And we don't want to resort to guilt-tripping anyone into paying for something they've been using for free.

So here's what we've come up with.

The **Simbolik Contributor Program** is a pay-what-you-want model. If you use Simbolik and find it valuable, you can contribute whatever amount feels right to you. There's no minimum. There's no pressure. Every contribution, regardless of size, goes directly back into developing Simbolik.

**One thing should be absolutely clear: every tool in Simbolik that is currently free or open-source will remain free and open-source.** That's a commitment, not a negotiating position. And we'll continue open-sourcing tools as we secure the sustainable funding to support them long-term.

For contributors who donate $40 or more per month, we're offering early access to tools that are still under active development — tools that haven't yet crossed what we internally call the "sustainable funding cliff," the point at which we're confident we can maintain them in the open without risking the rest of our work.

## The test-case debugger

The first tool available through early access is something our community has been asking for relentlessly: a **test-case debugger for Foundry**.

Some context for those less familiar: Simbolik already includes a smart contract debugger that is free to use, and it will stay free. You can step through contract execution, inspect storage, trace calls — the things you'd expect from a debugger. But there's been a massive gap in the Foundry ecosystem for a long time: debugging the *tests themselves*.

If you've ever written a complex Foundry test — maybe one involving multiple contract interactions, cheatcodes like `vm.prank` or `vm.assume`or `vm.expectRevert`, elaborate setup functions, and deeply nested call stacks — you know the pain of something going wrong and having no good way to figure out *where* or *why*. You add console.log statements. You comment out sections. You try `forge test -vvvv` and squint at the trace output. It works, sort of, until it doesn't.

The new test-case debugger is specifically designed for this. It lets you set breakpoints in your Foundry tests, step through test execution including cheatcode behavior, inspect the state at every point, and understand exactly what's happening in your test — including in the setup phase, in helper functions, and across cheatcode boundaries.

This has been the single most requested feature in our community over the past two years, and building it was an enormous undertaking. To make it work properly, we couldn't just bolt a debugger onto an existing Ethereum node. The way cheatcodes interact with EVM execution — manipulating sender addresses, fast-forwarding time, mocking return values — requires a level of introspection into node internals that no existing client was designed to provide. So we built one.

We implemented a purpose-built Ethereum node designed specifically for debugging, from the ground up. This wasn't a weekend project or a clever wrapper around Anvil. It was months of dedicated engineering: building an execution environment that could faithfully reproduce Foundry test behavior while exposing the internal state at every step in a way that's actually useful for debugging.

We did not have external funding for this tool. In an already challenging market — one where our team had already made personal financial sacrifices to keep our existing open-source tools alive — building the test-case debugger was a hard stretch. But we built it because our users needed it, because it was the right thing to build, and honestly, because we wanted it for ourselves too. We use Foundry every day in our auditing work, and we were feeling the same pain.

## A note on what's open and what isn't

We want to be transparent about something: not every tool in Simbolik is open-source. We know that might raise an eyebrow given everything we've said about our commitment to FLOSS. Here's how we think about it.

Our goal is to open-source everything we build. That's the destination. But open-sourcing a tool before we have a sustainable plan to maintain it would be irresponsible — it would set the tool up for the exact abandonment pattern we've spent years fighting against. So some tools start as early-access offerings for contributors, and as we build sustainable funding around them, they move toward open release.

Think of it as a pipeline, not a wall. The contributor program is how tools move through that pipeline faster.

## What we're asking

If you use Simbolik, Kontrol, KEVM, or any of the other tools Runtime Verification maintains — and if they've saved you time, caught bugs, or made your code more secure — we'd be grateful for your contribution. Not because you owe us anything. You don't. These tools were built to be used, and we're glad you're using them. But if you're in a position to help sustain their development, your support makes a real difference.

[**Join the Simbolik Contributor Program →**](https://claude.ai/chat/PLACEHOLDER_URL)

Every penny is reinvested into Simbolik's development. No middlemen, no overhead games, no mysterious "operational costs." Just a small, dedicated team building the tools you use, trying to do it sustainably.

## Grants and partnerships

We also want to be direct about something else: we're still actively seeking grant funding to expand our development. The contributor program isn't a replacement for grants — it's a complement. Grants have been and continue to be essential to bootstrapping new tools and funding larger R&D efforts that individual contributions can't easily support.

If you're operating a grant program and our work aligns with your mission, we'd love to talk. If you know someone who runs a grant program, an introduction would mean a lot. The security and developer tooling that Runtime Verification produces benefits the entire Ethereum ecosystem, and we believe that's a compelling case for continued public goods funding.

## If you can't contribute financially

That's completely fine. We mean it.

Keep using the tools. File issues when you find bugs — good bug reports are worth their weight in gold. Write about your experience with Simbolik or Kontrol. Tell other developers about tools you find useful. Contribute code if you're so inclined. Answer questions from other users in our Discord. Give us feedback on what's working and what isn't.

There are many ways to support open-source software, and community engagement is one of the most valuable. Some of the most impactful contributions we've received over the years weren't financial — they were developers who took the time to file detailed issues, who wrote tutorials, or who simply told a colleague about a tool that helped them.

## Looking ahead

We've been building open-source developer tooling in the Ethereum ecosystem for nearly a decade. We've weathered bear markets, navigated the boom-and-bust cycles of crypto, and made hard choices to keep our tools alive when it would have been easier — and more profitable — to let them go.

We're not going anywhere.

The Simbolik Contributor Program is our attempt to build a more sustainable foundation under the work we're already doing. It's not a pivot, not a paywall, and not a signal that we're abandoning open source. It's the opposite: it's how we keep our open-source commitment alive.

If you believe that the Ethereum ecosystem deserves high-quality, independent, open-source security tooling — built by people who care about the craft and commit to maintaining what they ship — then we're building the same thing you want to see in the world.

Come build it with us.