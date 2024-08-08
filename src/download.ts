
export const download = async (
    url: string,
    outfile: string,
    session: string,
): Promise<void> => {
    const response = await fetch(
        url,
        {
            headers: { Cookie: `MoodleSession=${session}` },
            // Should indicate an invalid session token
            redirect: "error",
        },
    );

    Bun.write(
        outfile,
        await response.blob(),
        { createPath: true, },
    );
};

