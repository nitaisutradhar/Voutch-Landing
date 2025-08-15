

const WaitlistForm = ({ form, setForm, handleSubmit, status }: {
    form: { name: string; email: string; phone: string };
    setForm: (data: { name: string; email: string; phone: string }) => void;
    handleSubmit: (e: React.FormEvent) => void;
    status: null | string;
  }) => {
    return (
        <div>
            <div className="modal-step active">
              <h3>Great! Voutch is Launching Soon.</h3>
              <p>
                Join the official waitlist to get exclusive early access and be
                the first to know when we&apos;re live.
              </p>
              <form
                id="waitlist-form"
                className="waitlist-form"
                action="#"
                method="POST"
                onSubmit={handleSubmit}
                autoComplete="off"
              >
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={form.name}
                    required
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    placeholder="Email Address"
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="phone"
                    value={form.phone}
                    required={false}
                    placeholder="Phone Number"
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  {status === "sending" ? "Joining..." : "Join the Waitlist"}
                </button>
              </form>
              {status === "success" && <p className="success-msg">🎉 You’re on the list!</p>}
              {status === "error" && <p className="error-msg">❌ Something went wrong.</p>}
            </div>
        </div>
    );
};

export default WaitlistForm;